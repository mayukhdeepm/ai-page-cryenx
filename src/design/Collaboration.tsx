import { curve1, curve2, curve3 } from "../assets";

// export const RightCurve = () => {
//   return (
//     <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
//       <img src={curve2} width={162} height={76} alt="Curve 2" />
//     </div>
//   );
// };

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img src={curve2} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-3/3 right-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};

export const RightCurve1 = ({ isFlipped }: { isFlipped: boolean }) => {
  return (
    <div className={`hidden xl:block absolute left-1/2 transform -translate-x-1/2 -mt-1 pointer-events-none ${isFlipped ? 'scale-x-[-1]' : ''}`}>
      <img src={curve3} width={600} height={76} alt="Curve 3" />
    </div>
  );
};