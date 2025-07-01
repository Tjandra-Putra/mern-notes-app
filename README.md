## Simple MERN Project demonstrating CRUD, rate limiting, responsive design and best practices

### Environment Variables Setup

Create a `.env` file in the **root of the backend folder** and add the following variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
NODE_ENV=production
```

### Installing Dependencing
On the root folder (siblings to backend and frontend) run this command:
npm run build

### Running the application on port 5001
On the root folder (siblings to backend and frontend) run this command:
npm run start

### Access the application on port 5001
http://localhost:5001/

![image](https://github.com/user-attachments/assets/a8eb4dd5-17ce-4d2c-a1f4-5ca040342414)
