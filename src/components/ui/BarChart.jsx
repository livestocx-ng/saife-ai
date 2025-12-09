const BarChart = ({ data, title, color = 'primary' }) => {
    const maxValue = Math.max(...data.map(item => item.value));
    
    const colorClasses = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
        success: 'bg-success',
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-medium">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
            <div className="space-y-4">
                {data.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-medium text-gray-700">{item.label}</span>
                            <span className="font-bold text-gray-900">{item.value.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div 
                                className={`h-full ${colorClasses[color]} transition-all duration-1000 ease-out rounded-full`}
                                style={{ width: `${(item.value / maxValue) * 100}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BarChart;

