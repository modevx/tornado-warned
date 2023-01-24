import React from "react";
import { PageLayout } from "components/_shared";
import { ConvectiveOutlookMap } from "features/spc-convective-outlooks";
import { OutlookPreviewCard } from "features/spc-convective-outlooks/components";
import { useCategoricalOutlooksQuery } from "features/spc-convective-outlooks/service";
import { OUTLOOK_LAYERS } from "features/spc-convective-outlooks/constants";

const OutlooksPage = () => {
  const { data: outlooks, error } = useCategoricalOutlooksQuery();

  React.useEffect(() => {
    outlooks &&
      console.log(
        "useCategoricalOutlooksQuery [0].data >>\n",
        outlooks[0].data
      );
  });

  return (
    <PageLayout>
      <ConvectiveOutlookMap />
      <div className="flex grid-cols-3">
        {outlooks
          ? outlooks.map((outlook, index) => {
              const { data: geometry } = outlook;

              return (
                <OutlookPreviewCard
                  key={`outlook-${index}`}
                  outlookDayGeoJson={geometry}
                />
              );
            })
          : null}
      </div>
    </PageLayout>
  );
};

export default OutlooksPage;
