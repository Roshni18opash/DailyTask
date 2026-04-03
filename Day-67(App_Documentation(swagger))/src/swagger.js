import swaggerJsdoc from "swagger-jsdoc";
import path from "path";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
  },
  apis: [
    path.join(process.cwd(), "src/app/api/**/*.js"),
    //path.join(process.cwd(), "src/app/api/**/*.ts"),
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
