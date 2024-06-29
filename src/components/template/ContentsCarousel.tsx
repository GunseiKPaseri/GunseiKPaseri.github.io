import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import MobileStepper from "@mui/material/MobileStepper"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Link } from "react-router-dom"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { type Source } from "../../sourceMeta"
import { ContentsCardExpanded } from "../molecules/ContentsCardExpanded"

export function ContentsCarousel(props: { sources: Source[] }) {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = props.sources.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  return (
    <Card sx={{ padding: 2, mb: 2 }}>
      <CardContent>
        <Typography variant="h4">成果物・取り組み・実績</Typography>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
        >
          {props.sources.map((step, _index) => (
            <SwiperSlide key={step.id}>
              <Box
                sx={{
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                <ContentsCardExpanded source={step} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <MobileStepper
          variant="progress"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              className="swiper-button-next"
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              className="swiper-button-prev"
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </CardContent>
      <CardActions>
        <Button component={Link} size="small" to={"/productions"}>
          もっと見る
        </Button>
      </CardActions>
    </Card>
  )
}
