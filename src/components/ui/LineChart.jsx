const LineChart = ({ data, title, color = 'primary' }) => {
    const maxValue = Math.max(...data.map(item => item.value));
    const minValue = Math.min(...data.map(item => item.value));
    const range = maxValue - minValue;

    const colorClasses = {
        primary: 'stroke-primary fill-primary/10',
        secondary: 'stroke-secondary fill-secondary/10',
        tertiary: 'stroke-tertiary fill-tertiary/10',
        success: 'stroke-success fill-success/10',
    };

    const getY = (value) => {
        return 100 - ((value - minValue) / range) * 100;
    };

    const points = data.map((item, index) => {
        const x = (index / (data.length - 1)) * 100;
        const y = getY(item.value);
        return `${x},${y}`;
    }).join(' ');

    const areaPoints = `0,100 ${points} 100,100`;

    return (
        <div className="bg-white rounded-xl p-6 shadow-medium">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
            <div className="space-y-4">
                <svg viewBox="0 0 100 100" className="w-full h-48" preserveAspectRatio="none">
                    {/* Area fill */}
                    <polygon 
                        points={areaPoints}
                        className={colorClasses[color]}
                        opacity="0.3"
                    />
                    {/* Line */}
                    <polyline
                        points={points}
                        fill="none"
                        className={colorClasses[color]}
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                    />
                    {/* Points */}
                    {data.map((item, index) => {
                        const x = (index / (data.length - 1)) * 100;
                        const y = getY(item.value);
                        return (
                            <circle
                                key={index}
                                cx={x}
                                cy={y}
                                r="0.5"
                                className={colorClasses[color]}
                                vectorEffect="non-scaling-stroke"
                            />
                        );
                    })}
                </svg>
                <div className="flex justify-between text-xs text-gray-600 pt-2">
                    {data.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="font-medium">{item.label}</div>
                            <div className="font-bold text-gray-900">{item.value.toLocaleString()}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LineChart;

