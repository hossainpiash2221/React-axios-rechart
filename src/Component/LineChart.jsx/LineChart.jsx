import { LineChart as Lchart, Line } from 'recharts';

const LineChart = () => {
 const studentMarks = [
  { student: "Student 1", math: 78, physics: 82 },
  { student: "Student 2", math: 85, physics: 79 },
  { student: "Student 3", math: 92, physics: 88 },
  { student: "Student 4", math: 67, physics: 72 },
  { student: "Student 5", math: 74, physics: 77 },
  { student: "Student 6", math: 88, physics: 85 },
  { student: "Student 7", math: 90, physics: 91 },
  { student: "Student 8", math: 81, physics: 78 },
  { student: "Student 9", math: 76, physics: 80 },
  { student: "Student 10", math: 95, physics: 94 }
];

    return (
        <div>
            <Lchart width={500} height={400} data={studentMarks}>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
            </Lchart>
        </div>
    );
};

export default LineChart;