
FROM node:20-alpine AS frontend-builder
WORKDIR /app
# Frontend dependencies copy karke install karein (Cache optimize karne ke liye)
COPY ./Frontend/package*.json ./
RUN npm install
# Code copy karein aur build run karein
COPY ./Frontend ./
RUN npm run build

# Stage 2: Final Backend Image
FROM node:20-alpine
WORKDIR /app

# Backend dependencies install karein
COPY ./Backend/package*.json ./
RUN npm install --production

# Backend code copy karein
COPY ./Backend ./

# Stage 1 se built frontend files ko backend ke public directory mein copy karein
COPY --from=frontend-builder /app/dist ./public

EXPOSE 4000

CMD ["node", "server.js"]