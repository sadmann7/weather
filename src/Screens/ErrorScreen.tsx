// external imports
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const ErrorScreen = ({ error }: { error?: string }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <ExclamationCircleIcon className="aspect-square w-24 text-red-400 md:w-28" />
      <h1 className="text-center text-2xl font-bold text-red-400 md:text-3xl">
        {error ? error : "Location not found"}
      </h1>
      <table>
        <thead className="text-base font-medium text-white md:text-lg">
          <tr>
            <th>Try doing these:</th>
          </tr>
        </thead>
        <tbody className="text-base font-medium text-white md:text-lg">
          <tr>
            <td>1. Spine transfer to nosegrab frontflip</td>
          </tr>
          <tr>
            <td>2. Wall flip to natas spin</td>
          </tr>
          <tr>
            <td>3. Sticker slap to manual to wallplant</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ErrorScreen;
