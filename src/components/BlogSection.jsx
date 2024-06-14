import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BlogContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: hsla(23, 15%, 88%, 1);
`;

const BlogTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #17282fff;
  animation: slideIn 1.5s ease-in-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const BlogRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BlogColumn = styled.div`
  flex: 1;
  padding: 20px;
`;

const BlogImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeInImage 2s ease-in-out;

  @keyframes fadeInImage {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const BlogText = styled.p`
  font-size: 18px;
  color: #2b3f4eff;
  line-height: 1.6;
  animation: fadeInText 2s ease-in-out;

  @keyframes fadeInText {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Button = styled.button`
  font-size: 20px;
  border: none;
  padding: 8px;
  background-color: #33515bff;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ;
    color: #f5f5f5ff;
  }
`;

const Blog = () => {
  return (
    <BlogContainer>
      <BlogTitle>Blog</BlogTitle>
      <BlogRow>
        <BlogColumn>
          <BlogImage src="/photo/mainphoto5.png" alt="Blog 1" />
        </BlogColumn>
        <BlogColumn>
          <BlogText>
            Descoperiți cele mai recente tendințe în lumea produselor handmade.
            Fiecare articol de pe blogul nostru este conceput pentru a vă
            inspira și pentru a vă oferi sfaturi utile despre cum să integrați
            produsele handmade în viața de zi cu zi.
          </BlogText>
          <Button>
            <NavLink
              to="/blog"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Citește
            </NavLink>
          </Button>
        </BlogColumn>
      </BlogRow>
      <BlogRow>
        <BlogColumn>
          <BlogImage src="/photo/mainphoto4.png" alt="Blog 2" />
        </BlogColumn>
        <BlogColumn>
          <BlogText>
            Alăturați-vă comunității noastre și explorați poveștile din spatele
            fiecărui produs. Aflați cum artiștii noștri își găsesc inspirația și
            cum fiecare piesă este realizată cu atenție și dragoste.
          </BlogText>
          <Button>
            <NavLink
              to="/blog"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Citește
            </NavLink>
          </Button>
        </BlogColumn>
      </BlogRow>

      <BlogRow>
        <BlogColumn>
          <BlogImage src="/photo/mainphoto6.png" alt="Blog 3" />
        </BlogColumn>
        <BlogColumn>
          <BlogText>
            Vă invităm să descoperiți evenimentele viitoare și colaborările
            noastre speciale. Fii la curent cu cele mai recente știri și noutăți
            din lumea produselor handmade.
          </BlogText>
          <Button>
            <NavLink
              to="/blog"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Citește
            </NavLink>
          </Button>
        </BlogColumn>
      </BlogRow>
    </BlogContainer>
  );
};

export default Blog;
