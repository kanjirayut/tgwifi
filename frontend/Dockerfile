# ใช้ Node.js รุ่นที่ต้องการ
FROM node:22

# ตั้งค่าโฟลเดอร์ทำงานในคอนเทนเนอร์
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package.json package-lock.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์โค้ดทั้งหมด
COPY . .

# ทำการ build Nuxt3 สำหรับ production
RUN npm run build

# พอร์ตที่จะใช้
EXPOSE 3000

# คำสั่งที่จะรันเมื่อคอนเทนเนอร์เริ่มต้น
CMD ["npm", "run", "start"]
