import { useState } from "react";
import { Modal } from "react-daisyui";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";

import { Basemap } from "components";
import { useCategoricalOutlookByLayerId } from "services/outlook-mapserver";
import { rewindPathGenerator } from "components/utils/path-generators";
import { CATEGORICAL } from "features/convective-outlooks/_constants/outlook-feature-details";

export const CategoricalMap = ({ outlookDay }) => {
  const DAY_TO_LAYERS = {
    1: 1,
    2: 9,
    3: 17,
  };

  const { data: features } = useCategoricalOutlookByLayerId(
    DAY_TO_LAYERS[outlookDay]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");

  const openModalHandler = (category) => {
    setCategory(category);
    setIsOpen(true);
  };

  const closeModalHandler = () => setIsOpen(false);

  return (
    <>
      <div className="w-full h-full">
        <Basemap>
          <g>
            {features
              ? features?.map((feature) => {
                  const {
                    id,
                    properties: { dn, idp_source },
                  } = feature;

                  const category = CATEGORICAL[dn];

                  return (
                    <path
                      key={`${idp_source}-${id}`}
                      d={rewindPathGenerator(feature)}
                      fill={category.bgColor}
                      opacity={0.7}
                      stroke={category.stroke}
                      strokeWidth={4}
                      onClick={() => openModalHandler(category)}
                    />
                  );
                })
              : null}
          </g>
        </Basemap>
        <FeatureDescriptionModal
          isOpen={isOpen}
          category={category}
          closeHandler={closeModalHandler}
        />
      </div>
    </>
  );
};

const FeatureDescriptionModal = ({ isOpen, category, closeHandler }) => {
  const { bgColor, description, label } = category;

  return (
    <Modal
      style={{ backgroundColor: bgColor }}
      open={isOpen}
      onClickBackdrop={closeHandler}
    >
      <div className="bg-base-100 rounded-md p-4">
        <div className="flex items-center mb-4">
          <CloseIcon
            onClick={closeHandler}
            size={30}
            className="mr-2 hover:fill-red-600"
          />
          <span>CLOSE</span>
        </div>
        <Modal.Header>{label}</Modal.Header>
        <Modal.Body>
          <pre className="whitespace-break-spaces">{description}</pre>
        </Modal.Body>
      </div>
    </Modal>
  );
};
