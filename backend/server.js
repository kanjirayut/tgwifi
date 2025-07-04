// backend/server.js
const express = require("express");
const cors = require("cors");
const RouterOSAPI = require("routeros-api");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // ระบุที่อยู่ของ Nuxt 3 frontend (หรือโดเมนที่คุณใช้)
    methods: ["GET", "POST", "PUT", "DELETE"], // อนุญาตให้ใช้ HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // อนุญาตให้ headers ไหนบ้าง
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MikroTik API
const api = RouterOSAPI;

// Route ตัวอย่าง
app.get("/api/log", async (req, res) => {
  const logs = await prisma.log.findMany();
  res.json(logs);
});

app.post("/api/log", async (req, res) => {
  try {
    const { firstname, lastname, ip_address } = req.body;
    const newLog = await prisma.log.create({
      data: {
        ip_address: ip_address ? ip_address : "",
        firstname: firstname ? firstname : "",
        lastname: lastname ? lastname : "",
      },
    });
    res.status(200).json({
      data: newLog, // ส่งข้อมูลที่สร้างใหม่จาก Prisma
      status: true, // สถานะการทำงานที่สำเร็จ
      code: 200, // รหัสสถานะ HTTP 200
    });
  } catch (error) {
    console.error("Error fetching logs:", error);
    console.error("Error fetching logs:", req.body);
    res.status(500).json({
      error: "Failed to retrieve logs",
      status: false, // สถานะผิดพลาด
      code: 500, // รหัสข้อผิดพลาด HTTP 500
    });
  }
});

// API endpoint to login user
app.post("/api/login", async (req, res) => {
  const { ip_address } = req.body;

  try {
    await api.connect("10.50.0.1", "tgguest", "tgguest"); // MikroTik API credentials

    // เช็ค IP address ของผู้ใช้ใน MikroTik Hotspot
    const users = await api.write("/ip/hotspot/user/print");

    const user = users.find(
      (user) => user.name === "TGLE1" && user.password === "tgl1234"
    );

    if (user) {
      // Enable user after login
      await API.write("/ip/hotspot/user/set", {
        ".id": user[".id"],
        disabled: false,
      });
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }

    api.disconnect();
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
