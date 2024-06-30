import { Typography } from "src/components/base"

const MainBanner = () => {
  return (
    <div className="m-10 lg:flex md:flex flex-col justify-center">
      <div>
        <Typography.Caption>Hello, I am</Typography.Caption>
        <Typography.Header>Grace Monzales</Typography.Header>
        <Typography.BodyText>
          I’m a Frontend Engineer who crafts visually appealing and highly functional web applications. At present, I'm directing my efforts towards developing feature-based solutions for Trunkrs’ daily logistic operations.
        </Typography.BodyText>
      </div>
    </div>
  )
}

export default MainBanner
