const DonutChart = ({ data, title }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = -90;

    const colors = {
        primary: '#EC4899',
        secondary: '#A855F7',
        tertiary: '#14B8A6',
        success: '#10B981',
        warning: '#F59E0B',
    };

    const getCoordinates = (angle, radius = 40) => {
        const radians = (angle * Math.PI) / 180;
        return {
            x: 50 + radius * Math.cos(radians),
            y: 50 + radius * Math.sin(radians),
        };
    };

    const segments = data.map((item) => {
        const percentage = (item.value / total) * 100;
        const angle = (percentage / 100) * 360;
        const startCoords = getCoordinates(currentAngle);
        currentAngle += angle;
        const endCoords = getCoordinates(currentAngle);
        const largeArcFlag = angle > 180 ? 1 : 0;

        const pathData = [
            `M 50 50`,
            `L ${startCoords.x} ${startCoords.y}`,
            `A 40 40 0 ${largeArcFlag} 1 ${endCoords.x} ${endCoords.y}`,
            'Z',
        ].join(' ');

        return {
            ...item,
            pathData,
            percentage: percentage.toFixed(1),
        };
    });

    return (
        <div className="bg-white rounded-xl p-6 shadow-medium">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Chart */}
                <div className="w-48 h-48 relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        {/* Background circle */}
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="20" />
                        {/* Segments */}
                        {segments.map((segment, index) => (
                            <path
                                key={index}
                                d={segment.pathData}
                                fill={colors[segment.color] || colors.primary}
                                className="transition-opacity hover:opacity-80 cursor-pointer"
                            />
                        ))}
                        {/* Center circle for donut effect */}
                        <circle cx="50" cy="50" r="25" fill="white" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-3xl font-bold text-gray-900">{total.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Total</div>
                    </div>
                </div>
                {/* Legend */}
                <div className="flex-1 space-y-3">
                    {segments.map((segment, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div 
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: colors[segment.color] || colors.primary }}
                                />
                                <span className="text-sm font-medium text-gray-700">{segment.label}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold text-gray-900">{segment.value.toLocaleString()}</span>
                                <span className="text-sm text-gray-600 w-12 text-right">{segment.percentage}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonutChart;

