const CONDITIONS = [/[a-z]/, /[A-Z]/, /\d/, /[!@#$%^&*]/];
const COLORS = ['black', 'red', 'orange', 'yellow', 'green'];
function countMatchingConditions(str?: string): number {
  let count = 0;

  for (const condition of CONDITIONS) {
    if (condition.test(str || '')) {
      count++;
    }
  }

  return count;
}

interface IPasswordStrengthProps {
  value?: string;
}
const PasswordStrength: React.FC<IPasswordStrengthProps> = ({ value }) => {
  const strength = countMatchingConditions(value);

  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {CONDITIONS.map((_, i) => (
        <div key={i} style={{ flexGrow: 1, height: 10, backgroundColor: COLORS[strength] }}></div>
      ))}
    </div>
  );
};

export default PasswordStrength;
