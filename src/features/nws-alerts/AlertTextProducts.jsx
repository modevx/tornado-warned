import {
  TornadoWarningTextProduct,
  TornadoWatchTextProduct,
} from "features/nws-alerts";

export const AlertTextProducts = ({ type, textProducts }) => {
  const ComponentMap = {
    tornadoWarning: TornadoWarningTextProduct,
    tornadoWatch: TornadoWatchTextProduct,
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-3">
        {textProducts
          ? textProducts.map((textProduct) => {
              const { id } = textProduct;
              const TextProduct = ComponentMap[type];

              return <TextProduct key={id} textProduct={textProduct} />;
            })
          : null}
      </div>
    </div>
  );
};
