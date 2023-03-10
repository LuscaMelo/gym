import { Hero } from "./components/Hero"
import { Programs } from "./components/Programs"
import { BodyTransformation } from "./components/BodyTransformation"
import { Plans } from "./components/Plans"
import { Testimonials } from "./components/Testimonials"

export const App = () => {

  return (
    <div className="App">
      <Hero />
      <Programs />
      <BodyTransformation />
      <Testimonials />
      <Plans />
    </div>
  )
}
