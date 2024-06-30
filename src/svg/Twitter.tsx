import { ReactElement, SVGProps } from "react";

interface TwitterIconProps extends SVGProps<SVGSVGElement> {}

const TwitterIcon: React.FC<TwitterIconProps> = (props): ReactElement => {
  return (
    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_584_273)">
        <path d="M22.0342 3.75298C22.0342 3.75298 20.1369 4.87367 19.082 5.19145C18.5158 4.54039 17.7633 4.07893 16.9262 3.8695C16.0892 3.66006 15.208 3.71274 14.4019 4.02042C13.5958 4.3281 12.9036 4.87593 12.419 5.58981C11.9344 6.3037 11.6807 7.1492 11.6923 8.01196V8.95213C10.0401 8.99497 8.40288 8.62854 6.92657 7.88546C5.45025 7.14238 4.18062 6.04572 3.23074 4.69316C3.23074 4.69316 -0.529939 13.1547 7.9316 16.9154C5.99534 18.2297 3.68876 18.8887 1.3504 18.7957C9.81194 23.4966 20.1538 18.7957 20.1538 7.98375C20.1532 7.72176 20.1281 7.46165 20.0786 7.20341C21.0376 6.2576 22.0342 3.75298 22.0342 3.75298Z" stroke="#EEBEBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_584_273">
          <rect width="22.5641" height="22.5641" fill="white" transform="translate(0.410217 0.923096)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default TwitterIcon;
