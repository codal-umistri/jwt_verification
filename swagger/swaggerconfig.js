const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Notes API",
      version: "1.0.0",
      description:
        "The Notes API allows users to register accounts, log in securely, and manage their notes. Each user can create, update, delete, and retrieve their notes through a set of well-defined API endpoints. The API ensures data security by employing JWT tokens for user authentication and authorization.",
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./Routes/Route.js"],
};

module.exports = swaggerOptions;
