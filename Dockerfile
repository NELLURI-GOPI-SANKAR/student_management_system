# ------------ Stage 1: Build the app using Maven ------------
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy the entire project to the image
COPY . .

# Build the Spring Boot application (skip tests to save time)
RUN ./mvnw clean package -DskipTests

# ------------ Stage 2: Run the app using JDK-only image ------------
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app

# Copy only the built jar from previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose port (for documentation purpose)
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
