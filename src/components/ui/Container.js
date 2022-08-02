import styled from 'styled-components';
import BackPic from 'asset/background.jpg';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  min-height: 760px;
  max-height: 780px;
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px 0;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.background};
  background-image: url(${BackPic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.primary};
  overflow: auto;
  `;
