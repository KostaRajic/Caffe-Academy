import { CoffeeMenu } from "../components/CoffeeMenu"
import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { SpecialSelection } from "../components/SpecialSelection"
import { WelcomeInfo } from "../components/WelcomeInfo"

export const HomePage = () => {

    return <div>
        <Header />
        <HeroSection />
        <CoffeeMenu />
        <SpecialSelection />
        <WelcomeInfo />
    </div>

}