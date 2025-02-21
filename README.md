![CARRYBEE (1)](https://github.com/user-attachments/assets/3b412115-97e2-4597-84ef-9803460c0738)
# CARRYBEE

### Overview 👓
This project is a portfolio project for Holberton students. Our group has decided to build a courier app inspired by the popular application in Southeast Asia called Lalamove. This app allows users to have their parcels delivered within a day, with additional delivery options tailored to their needs. The app also enables anyone who owns a vehicle to become a driver and earn extra money. We aim to create a courier app that Australia has never seen before. The purpose of the project is for everyone to work together and build a full-stack application using a variety of tools.

This project lasts for 4 weeks, which includes planning, diagram drawing, Figma design, database development, and UX/UI design. We have divided into two teams: front-end and back-end.

### Technical Architecture 👩‍🏫
---------------------------------
# Structure 🏔
# 🚀 Project Setup and Usage


# 🚦 **Running the Project from Scratch**

### **0. Pull Latest Code**

```bash
git pull origin main
```

### **1. Clone the Repository**

```bash
git clone https://github.com/swe24-phon/carrybee-dev.git
cd carrybee-dev
```

### **2. Create Your Branch**

```bash
git checkout -b <branch_name>
```

### **3. Check Git Status**

```bash
git status
```

### **4. Ensure Docker Desktop is Running!**

---

## 🛠 **Docker Setup and Running the App**

### **1️⃣ Remove Existing Containers (Optional)**

To clean up existing Docker containers and images, run:

```bash
docker compose down --rmi all
```

### **2️⃣ Start the Containers**

Build and start the Docker containers:

```bash
docker compose up --build
```

### **3️⃣ Verify Running Containers**

- Open the **Docker Desktop** app and ensure all three containers (**frontend, backend, and database**) are running.
- Click on the **frontend port** to open the app in your browser.

### **4️⃣ Run Development Server (`npm run dev`)**

- Start an interactive session inside the **backend** or **frontend** container:

```bash
docker exec -it <container_name> bash
```

- Then run the development server:

```bash
npm run dev
```

---

## 🛠 **Database Setup & Seeding Data**

### **1️⃣ Verify Database Connection**

Check backend logs to verify the database connection:

```bash
docker logs -f backend
```

Look for the confirmation message:

```
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "carry_bee", schema "public" at "db:5432"
```

### **2️⃣ Seed the Database**

- Open a new terminal and enter the backend container:

```bash
docker exec -it backend bash
```

- Seed the database with:

```bash
npx prisma db seed
```

### **3️⃣ View Database Data with Prisma Studio**

```bash
npx prisma studio
```

This opens Prisma Studio, where you can view and edit database records.

---


##  **Database Setup**

### **1. Check Running Containers**

```bash
docker ps -a
```

### **2. Run Prisma Migrations**

```bash
docker exec -it backend npx prisma migrate dev --name init
```

### **3. Access the Database via psql**

```bash
docker exec -it db psql -U carry_bee
```

### **4. Verify Database Tables**

```sql
carry_bee-# \dt
```

### **5. Prisma Commands (Optional)**

```bash
npx prisma format
npx prisma generate
npx prisma db push
npx prisma migrate dev --name <meaningful_migration_name>
npx prisma studio
```

---

## ⚠️ **Troubleshooting: Port 3000 Already in Use**

If you see this error:

```
code: 'EADDRINUSE',
errno: -4091,
syscall: 'listen',
address: '::',
port: 3000
```

### **For Windows:**

- Find the process using port 3000:

```bash
netstat -ano | findstr :3000
```

- Kill the process:

```bash
taskkill /PID <PID> /F
```

### Test 🌊

--------------------------------
# Developed By: 🧑‍💻
