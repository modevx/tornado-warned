export const AlertSection = ({ alertFeatureArr, alertComponent, title }) => {
  const AlertComponent = alertComponent;

  return (
    <section>
      <SectionTitle title={title} />
      <div className="grid gap-4 mb-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {alertFeatureArr
          ? alertFeatureArr.map((feature) => (
              <AlertComponent key={feature.id} alert={feature} />
            ))
          : null}
      </div>
    </section>
  );
};

const SectionTitle = ({ title }) => {
  return (
    <>
      <h2 className="font-display uppercase text-3xl mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-600">
        {title}
      </h2>
    </>
  );
};
