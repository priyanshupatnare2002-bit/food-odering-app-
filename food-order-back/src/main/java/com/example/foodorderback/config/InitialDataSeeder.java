package com.example.foodorderback.config;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Base64;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.foodorderback.model.Meal;
import com.example.foodorderback.model.MealType;
import com.example.foodorderback.repository.MealRepository;
import com.example.foodorderback.repository.MealTypeRepository;

@Component
public class InitialDataSeeder implements CommandLineRunner {

	private final MealTypeRepository mealTypeRepository;
	private final MealRepository mealRepository;

	public InitialDataSeeder(MealTypeRepository mealTypeRepository, MealRepository mealRepository) {
		this.mealTypeRepository = mealTypeRepository;
		this.mealRepository = mealRepository;
	}

	@Override
	public void run(String... args) {
		MealType pizza = mealType("PIZZA", "Freshly baked pizzas with loaded toppings.", "pizza.avif");
		MealType streetFood = mealType("STREET FOOD", "Popular Indian snacks and quick bites.", "pav bhaji.jpg");
		MealType chinese = mealType("CHINESE", "Spicy noodles, momos, and Indo-Chinese favorites.", "noddels.jpg");
		MealType pasta = mealType("PASTA", "Creamy and spicy pasta bowls.", "pasta.jpg");
		MealType meals = mealType("INDIAN MEALS", "Comforting lunch and dinner plates.", "dal.jpg");

		meal("Margherita Pizza", 199, pizza, "Classic cheese pizza with tomato sauce and herbs.", "pizza.avif");
		meal("Onion Cheese Pizza", 249, pizza, "Loaded onion pizza with melted cheese.", "onion pizza.avif");
		meal("Pav Bhaji", 149, streetFood, "Buttery pav served with spicy mashed vegetable bhaji.", "pav bhaji.jpg");
		meal("Chhole Bhature", 179, streetFood, "Fluffy bhature with rich Punjabi chhole.", "chhole bhature.jpg");
		meal("Veg Momos", 129, chinese, "Steamed momos with spicy red chutney.", "momos.jpg");
		meal("Masala Noodles", 139, chinese, "Street-style noodles tossed with vegetables and sauce.", "noddels.jpg");
		meal("Spicy Pasta", 169, pasta, "Penne pasta in a spicy red sauce.", "pasta spycy.jpg");
		meal("Creamy Pasta", 179, pasta, "Creamy pasta with herbs and vegetables.", "pasta.jpg");
		meal("Dal Tadka Rice", 159, meals, "Yellow dal tadka served with steamed rice.", "dal.jpg");
		meal("Masala Maggi", 99, streetFood, "Quick masala Maggi with vegetables and spices.", "maggi.jpg");
	}

	private MealType mealType(String typeName, String description, String imageName) {
		MealType mealType = mealTypeRepository.findByTypeName(typeName).orElseGet(MealType::new);
		mealType.setTypeName(typeName);
		mealType.setDescription(description);
		mealType.setImageName(imageName);
		mealType.setImage(readImage(imageName));
		return mealTypeRepository.save(mealType);
	}

	private void meal(String name, int price, MealType mealType, String description, String imageName) {
		Meal meal = mealRepository.findByName(name).orElseGet(Meal::new);
		meal.setName(name);
		meal.setPrice(price);
		meal.setMealType(mealType);
		meal.setDescription(description);
		meal.setImageName(imageName);
		meal.setImage(readImage(imageName));
		mealRepository.save(meal);
	}

	private String readImage(String imageName) {
		try {
			byte[] bytes = Files.readAllBytes(Path.of("image-meals", imageName));
			return Base64.getEncoder().encodeToString(bytes);
		} catch (IOException exception) {
			return "";
		}
	}
}
