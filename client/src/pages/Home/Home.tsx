import Intro from '../../components/Intro/Intro'
import Slider from '../../components/Slider/Slider'

export default function Home() {
  return (
    <>
      <Intro />
      <Slider title={'Последние поступления'} />
      <Slider title={'самые продаваемые'} />
    </>
  )
}
