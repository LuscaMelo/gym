import { Hero } from "./components/Hero"
import { Workouts } from "./components/Workouts"
import { BodyTransformation } from "./components/BodyTransformation"
import { Plans } from "./components/Plans"
import { Testimonials } from "./components/Testimonials"
import { Subscribe } from "./components/Subscribe"

export const App = () => {

  return (
    <div className="App">
      <Hero />
      <Workouts />
      <BodyTransformation />
      <Testimonials />
      <Plans />
      <Subscribe />
    </div>
  )
}
