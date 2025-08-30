import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Blogs = ({ openForm }) => {
  const blogPosts = [
    { img: "Images/bbg1.PNG", title: "What is Mindful Eating?", desc: "Mindful eating entails fully engaging in the present moment and maintaining an awareness of your thoughts, emotions, and bodily sensations as you eat your food.", fullDesc:"Mindful EatingThe primary distinction between mindful eating and dieting is that the former focuses on the quality of your eating experience, while the latter centers around restricting certain food groups or counting calories.Mindful eating is not a custom weight loss plan; instead, it promotes a healthy and balanced relationship with food, free from guilt or deprivation.Principles of Mindful Eating:1. Cultivate the Right Space: Design a space that promotes relaxation and focus during mealtimes, such as setting the table with attractive dinnerware, lighting candles, or playing soft background music.2. Listen to Your Body: One of the core principles of mindful eating is tuning in to your body’s natural signals for hunger and satiety. By paying close attention to these cues, you can avoid overeating and develop a healthier relationship with food."
     },
    { img: "Images/yuu.jpg", title: "How to Make Exercise a Regular Habit in 6 Steps", desc: "These six steps can help shift your focus so that you approach exercise as a means to a healthier life, which is essential for making it a daily habit", fullDesc:[
    "1.Treat yourself: Give yourself a small nonfood-related reward after completing a workout, doing all of the workouts you scheduled for yourself in a week or when you hit a goal.", 
    "2.Schedule your workouts: If you live by your appointment calendar, it may sometimes feel as though your schedule takes over your life and limits the amount of time available for workout.",
    "3.Set a learning goal: There are two primary types of goals: outcome and learning. Outcome goals focus on the end result of performing a task, such as completing a marathon. Learning goals, however, focus on the process or steps required to achieve an outcome, such as learning how to exercise with a kettlebell.",
    "4.Change your mindset: Refocus your outcome goals to focus on quality of life rather than trying to achieve some media-defined appearance.",
    "5.Develop a journaling practice: Use a journal to track your progress and record how you feel after you exercise. This does not require lugging a journal with you to the gym for every workout—you could simply use the notes app on your phone to record a few brief statements about how the workout made you feel.",
    "6.Find a workout buddy: Enlisting a friend or family member to be a workout partner can give you someone to exercise with, which helps the time pass more quickly."]},
    { img:"Images/bbg3.PNG", title:"Time-Friendly Fitness: The Advantages of Gyms with Flexible Hours", desc:"Mindful eating entails fully engaging in the present moment and maintaining an awareness of your thoughts, emotions, and bodily sensations as you eat your food."},
    { img:"Images/bbg4.PNG", title:"The Ultimate Full-body circuit workout for beginners", desc:"Keeping your fitness journey fresh and exciting can feel like a lifelong quest. You want to balance your workout routine full of old favorites you know and love while throwing in new adventures so you steer clear of boredom and make the most out of the time you spend moving."}
  ];

  return (
    <section className="py-5" id="blogs">
      <Container>
        <h2 className="mb-4">Latest Blogs</h2>
        <Row xs={1} sm={2} md={2} className="g-4">
          {blogPosts.map((blog, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={blog.img} />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.desc}</Card.Text>
                  <Button variant="primary" onClick={() => openForm(blog.title, blog.fullDesc)}>Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
