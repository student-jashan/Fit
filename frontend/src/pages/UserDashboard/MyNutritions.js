import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const MyNutrition = ({ bmi, bmiCategory }) => {
  if (!bmi) {
    return (
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 text-center shadow-sm">
              <h5>⚠️ Please calculate your BMI in <strong>Profile</strong> to see your Nutrition Plan</h5>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  const nutritionPlans = {
    Underweight: {
      title: "Weight Gain Meal Plan",
      desc: "High calorie plan for gaining healthy weight",
      calories: "2500 kcal",
      macros: { Protein: "25%", Carbs: "50%", Fats: "25%" },
      meals: [
        "Breakfast: Oatmeal, banana, nuts",
        "Lunch: Chicken breast, rice, vegetables",
        "Dinner: Paneer curry with chapati",
      ],
    },
    Normal: {
      title: "Maintenance Meal Plan",
      desc: "Balanced plan for staying healthy",
      calories: "2000 kcal",
      macros: { Protein: "30%", Carbs: "45%", Fats: "25%" },
      meals: [
        "Breakfast: Eggs & toast with avocado",
        "Lunch: Grilled chicken with quinoa",
        "Dinner: Fish with veggies",
      ],
    },
    Overweight: {
      title: "Weight Loss Meal Plan",
      desc: "Balanced plan for healthy weight loss",
      calories: "1500 kcal",
      macros: { Protein: "30%", Carbs: "40%", Fats: "30%" },
      meals: [
        "Breakfast: Green smoothie, egg whites",
        "Lunch: Grilled fish with salad & olive oil",
        "Dinner: Vegetable soup with lentils",
      ],
    },
  };

  const plan = nutritionPlans[bmiCategory];

  if (!plan) {
    return (
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 text-center shadow-sm">
              <h5>⚠️ No Nutrition Plan found for BMI Category: {bmiCategory}</h5>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow rounded-3">
            <h4 className="mb-3">{plan.title}</h4>
            <p>{plan.desc}</p>
            <p>
              <strong>Daily Calories:</strong> {plan.calories}
            </p>
            <h6>Macros:</h6>
            <ul>
              {Object.entries(plan.macros).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
            <h6>Sample Meals:</h6>
            <ul>
              {plan.meals.map((meal, idx) => (
                <li key={idx}>{meal}</li>
              ))}
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyNutrition;
