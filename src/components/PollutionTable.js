import { BoxLayout } from "./BoxLayout";

export function PollutionTable() {
  return (
    <div >
      <BoxLayout>
        <table className="table-auto rounded-xl border-collapse border-spacing-1">
          <thead>
            <tr className="border-b-2 border-solid border-white-300 dark:border-slate-800 text-red-400 dark:text-red-600">
              <th></th>
              <th>
                SO <sub>2</sub>
              </th>
              <th>
                NO <sub>2</sub>
              </th>
              <th>
                PM <sub>10</sub>
              </th>
              <th>
                PM <sub>2.5</sub>
              </th>
              <th>
                O <sub>3</sub>
              </th>
              <th>CO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-green-600">Good</td>
              <td>0 - 19</td>
              <td>0 - 40</td>
              <td>0 - 19</td>
              <td>0 - 9</td>
              <td>0 - 59</td>
              <td>0 - 4399</td>
            </tr>

            <tr>
              <td className="text-lime-500">Fair</td>
              <td>20 - 79</td>
              <td>40 - 69</td>
              <td>20 - 49</td>
              <td>10 - 24</td>
              <td>60 - 99</td>
              <td>4400 - 9399</td>
            </tr>

            <tr>
              <td className="text-yellow-500">Moderate</td>
              <td>80 - 249</td>
              <td>70 - 149</td>
              <td>50 - 99</td>
              <td>25 - 49</td>
              <td>100 - 139</td>
              <td>9400 - 12399</td>
            </tr>

            <tr>
              <td className="text-orange-500">Poor</td>
              <td>250 - 349</td>
              <td>150 - 199</td>
              <td>100 - 199</td>
              <td>50 - 74</td>
              <td>140 - 179</td>
              <td>12400 - 15399</td>
            </tr>

            <tr>
              <td className="text-red-600">Very Poor</td>
              <td>&ge; 350</td>
              <td>&ge; 200</td>
              <td>&ge; 200</td>
              <td>&ge; 75</td>
              <td>&ge; 180</td>
              <td>&ge; 15400</td>
            </tr>
          </tbody>
        </table>
      </BoxLayout>
    </div>
  );
}
