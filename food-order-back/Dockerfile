FROM eclipse-temurin:17-jdk AS build

WORKDIR /app

COPY .mvn .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B

COPY src src
COPY image-meals image-meals
RUN ./mvnw package -DskipTests

FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=build /app/target/food-order-back-0.0.1-SNAPSHOT.jar app.jar
COPY --from=build /app/image-meals image-meals

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
