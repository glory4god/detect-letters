import React, { useState } from 'react';

import { Container } from '@components/ui/Container';
import { Button, Input } from '@mui/material';

const Home = () => {
  // const file = new FormData();

  const [loading, setLoading] = useState<boolean>(false);
  const [letters, setLetters] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const postImages = async (file: any) => {
    if (!file) {
      window.alert('파일이 없습니다!');
    } else {
      console.log(file);
      const response = await fetch(
        'https://dapi.kakao.com//v2/vision/text/ocr',
        {
          method: 'POST',
          headers: {
            Authorization: 'KakaoAK b74ee6269d85e4a59a5f84716fb0c1ea',
          },
          body: file,
        },
      );

      if (!response.ok) {
        window.alert('failed');
      }

      const resJson = await response.json();
      console.log(resJson);
      const letter = resJson.result.map((l: any) => {
        return l.recognition_words[0];
      });
      setLetters(letter);
    }
  };

  const onChange = (e: any) => {
    const data = e.target.files[0];
    // file.append('image', data);
    console.log(data);
  };

  return (
    <Container>
      <div className="max-w-sm mx-auto px-4 pt-20">
        <h2 className="pb-4 text-3xl">오답 어플리케이션</h2>
        <Input type="file" onChange={onChange} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // postImages(file);
            // setImageUrl(URL.createObjectURL(file.get('image')));
          }}>
          이미지 분석
        </Button>

        <div>
          <div
            style={{
              width: '200px',
              height: '200px',
              backgroundImage: `url(${imageUrl})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no repeat',
              backgroundSize: 'contain',
            }}></div>
          <p>
            {letters.map((l: string) => {
              return <span key={l}>{l} </span>;
            })}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
