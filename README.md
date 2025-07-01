## Simple MERN Project  
A full-stack MERN app demonstrating CRUD operations, rate limiting, responsive design, and best practices.

---

### Setup Instructions

#### Environment Variables

Create a `.env` file in the **backend** folder with the following contents:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
NODE_ENV=development
```

> 🔁 Change `NODE_ENV` to `production` when deploying.

---

### Running in Development

1. **Backend**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

---

### Running in Production

From the **root folder** (same level as `backend` and `frontend`):

```bash
# Ensure NODE_ENV is set to production in backend/.env
npm run build
npm run start
```

---

### Access the Application

Once running, the app will be available at:  
[http://localhost:5001/](http://localhost:5001/)

---

### Preview

![App Preview](https://github.com/user-attachments/assets/a8eb4dd5-17ce-4d2c-a1f4-5ca040342414)
