import Features from '../../components/Features/Features'
import Intro from '../../components/Intro/Intro'
import Slider from '../../components/Slider/Slider'

export default function Home() {
  return (
    <>
      <Intro />
      <Features />
      <Slider title={'Последние поступления'} />
      <Slider title={'самые продаваемые'} />
    </>
  )
}
