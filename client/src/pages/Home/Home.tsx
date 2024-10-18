import Features from '../../components/Features/Features'
import Intro from '../../components/Intro/Intro'
import Poster from '../../components/Poster/Poster'
import Promotion from '../../components/Promotion/Promotion'
import Slider from '../../components/Slider/Slider'

export default function Home() {
  return (
    <>
      <Intro />
      <Features />
      <Slider title={'Последние поступления'} />
      <Slider title={'самые продаваемые'} />
      <Poster />
      <Promotion />
    </>
  )
}
