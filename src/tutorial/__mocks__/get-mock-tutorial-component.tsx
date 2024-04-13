// eslint-disable-next-line react/display-name
const getMockTutorialComponent = (index: number) => () => (
  <p>Tutorial Component {index + 1}</p>
);

export default getMockTutorialComponent;
