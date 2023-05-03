export const Heading = ({ type, title }) => {
  const ComponentMap = {
    h1: <h1>{title}</h1>,
    h2: <h2>{title}</h2>,
    h3: <h3>{title}</h3>,
    h4: <h4>{title}</h4>,
  };

  const HeadingComponent = ComponentMap[type];

  return <HeadingComponent />;
};
