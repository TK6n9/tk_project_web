import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";
import "./App.css"; // 커스텀 스타일

const images = [
  {
    src: [
      `${process.env.PUBLIC_URL}/expo_app.png`,
      `${process.env.PUBLIC_URL}/expo_app2.png`,
      `${process.env.PUBLIC_URL}/expo_app3.png`,
      `${process.env.PUBLIC_URL}/expo_app4.png`,
      `${process.env.PUBLIC_URL}/expo_app6.png`,
    ],
    title: "[React Native] expo 증권 랭킹앱",
    description:
      "리액트네이티브 expo로 만든 증권을 랭킹화 시킨 앱입니다. 랭킹화는 모든 재무제표를 정규화하여 긍정적인 값과 부정적인 값을 나누고 저만의 비중을 나눠서 랭킹화 시켰습니다.",
  },
  {
    src: `${process.env.PUBLIC_URL}/youtube분석.png`,
    title: "[GPT API 활용 및 구글API 활용] 실시간 유튜브 크롤링 요약분석",
    description:
      "최신화된 100개의 한국증권뉴스의 자막을 추출하고, GPT API를 활용 긍정적 산업과 부정적 산업을 찾아주는 프로그램입니다.",
  },
  {
    src: `${process.env.PUBLIC_URL}/엘리엇_하모닉패턴분석.png`,
    title: "[엘리엇파동 하모닉패턴 자동탐색기]",
    description:
      "일일히 작도하지 않고 원하는 주가코드를 대입하면 차트패턴을 찾아줍니다. 트레이딩뷰에서 유료로 사용되는 수준과 유사한 정도입니다.",
  },
  {
    src: `${process.env.PUBLIC_URL}/expo_app5.png`,
    title: "[tensorflow.js LSTM 활용사례]",
    description:
      "최적의 epoch 최적화된 Batch사이즈를 찾아 다음 데이터를 예측하는 프로그램입니다.",
  },
];

const ArtTitle = styled(Typography)({
  fontFamily: "GowunBatang-Regular",
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginTop: "10px",
  marginBottom: "24px",
});

const ArtDescription = styled(Typography)({
  fontFamily: "GowunBatang-Regular",
  fontSize: "1rem",
  color: "#555555",
});

const ArtGalleryContainer = styled(Container)({
  backgroundColor: "#f5f5f5",
  padding: "50px",
  minHeight: "100vh",
});

const ArtCard = styled(Card)({
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "24px",
});

const ArtCardMedia = styled(CardMedia)({
  height: "450px",
  cursor: "pointer",
});

const ArtCardContent = styled(CardContent)({
  textAlign: "center",
});
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80%",
    maxHeight: "80%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <ArtGalleryContainer>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        style={{ fontFamily: "GowunBatang-Regular", marginBottom: "40px" }}
      >
        프로젝트 설명
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <ArtCard>
            <Slider {...settings}>
              {images[0].src.map((src, index) => (
                <ArtCardMedia
                  key={index}
                  image={src}
                  onClick={() => openModal(src)}
                />
              ))}
            </Slider>
            <ArtCardContent>
              <ArtTitle>{images[0].title}</ArtTitle>
              <ArtDescription>{images[0].description}</ArtDescription>
            </ArtCardContent>
          </ArtCard>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <ArtCard>
            <ArtCardMedia
              image={images[1].src}
              onClick={() => openModal(images[1].src)}
            />
            <ArtCardContent>
              <ArtTitle>{images[1].title}</ArtTitle>
              <ArtDescription>{images[1].description}</ArtDescription>
            </ArtCardContent>
          </ArtCard>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <ArtCard>
            <ArtCardMedia
              image={images[2].src}
              onClick={() => openModal(images[2].src)}
            />
            <ArtCardContent>
              <ArtTitle>{images[2].title}</ArtTitle>
              <ArtDescription>{images[2].description}</ArtDescription>
            </ArtCardContent>
          </ArtCard>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <ArtCard>
            <ArtCardMedia
              image={images[3].src}
              onClick={() => openModal(images[3].src)}
            />
            <ArtCardContent>
              <ArtTitle>{images[3].title}</ArtTitle>
              <ArtDescription>{images[3].description}</ArtDescription>
            </ArtCardContent>
          </ArtCard>
        </Grid>
      </Grid>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img
          src={selectedImage}
          alt="Original"
          style={{ width: "100%", maxHeight: "80vh" }}
        />
      </Modal>
    </ArtGalleryContainer>
  );
};

export default App;
