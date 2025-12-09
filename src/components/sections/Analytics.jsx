import { TrendingUp, Users, Shield, Video, Globe, Smartphone, CheckCircle, AlertTriangle } from 'lucide-react';
import BarChart from '../ui/BarChart';
import LineChart from '../ui/LineChart';
import DonutChart from '../ui/DonutChart';

const Analytics = () => {
    // User Growth Data (Monthly from inception to current)
    const userGrowthData = [
        { label: 'Jan', value: 120 },
        { label: 'Feb', value: 280 },
        { label: 'Mar', value: 450 },
        { label: 'Apr', value: 680 },
        { label: 'May', value: 920 },
        { label: 'Jun', value: 1200 },
        { label: 'Jul', value: 1450 },
        { label: 'Aug', value: 1750 },
        { label: 'Sep', value: 1880 },
        { label: 'Oct', value: 1950 },
        { label: 'Nov', value: 2000 },
    ];

    // Content Blocked Monthly (scaled to show growth)
    const contentBlockedData = [
        { label: 'Jan', value: 2600 },
        { label: 'Feb', value: 6800 },
        { label: 'Mar', value: 11800 },
        { label: 'Apr', value: 18000 },
        { label: 'May', value: 24200 },
        { label: 'Jun', value: 29500 },
        { label: 'Jul', value: 34800 },
        { label: 'Aug', value: 38800 },
        { label: 'Sep', value: 41900 },
        { label: 'Oct', value: 43500 },
        { label: 'Nov', value: 45000 },
    ];

    // Platform Usage Distribution
    const platformData = [
        { label: 'TikTok', value: 780, color: 'primary' },
        { label: 'Instagram', value: 520, color: 'secondary' },
        { label: 'YouTube', value: 380, color: 'tertiary' },
        { label: 'Facebook', value: 220, color: 'success' },
        { label: 'Snapchat', value: 100, color: 'warning' },
    ];

    // Content Type Blocked
    const contentTypeData = [
        { label: 'Violent Videos', value: 20000 },
        { label: 'Harassment Comments', value: 13000 },
        { label: 'Sexual Content', value: 8700 },
        { label: 'Hate Speech', value: 3300 },
    ];

    // Geographic Distribution (Top Regions)
    const geographicData = [
        { label: 'Nigeria', value: 680 },
        // { label: 'Kenya', value: 520 },
        // { label: 'South Africa', value: 380 },
        // { label: 'Ghana', value: 280 },
        // { label: 'Uganda', value: 140 },
    ];

    // Key Metrics Cards
    const keyMetrics = [
        {
            icon: Users,
            label: 'Total Protected Users',
            value: '2,000+',
            trend: '+150%',
            color: 'primary',
        },
        {
            icon: Video,
            label: 'Content Blocked Monthly',
            value: '45,000+',
            trend: '+680%',
            color: 'secondary',
        },
        {
            icon: Shield,
            label: 'Active Protection Sessions',
            value: '25,000+',
            trend: '+420%',
            color: 'tertiary',
        },
        {
            icon: Globe,
            label: 'Countries Reached',
            value: '1',
            trend: '+200%',
            color: 'success',
        },
    ];

    // Engagement Metrics
    const engagementMetrics = [
        {
            label: 'Daily Active Users',
            value: '1,650',
            percentage: 82.5,
            icon: Users,
        },
        {
            label: 'Avg. Session Duration',
            value: '45 min',
            percentage: 75,
            icon: Smartphone,
        },
        {
            label: 'User Satisfaction',
            value: '4.6/5',
            percentage: 92,
            icon: CheckCircle,
        },
        {
            label: 'Threat Detection Rate',
            value: '97.8%',
            percentage: 97.8,
            icon: AlertTriangle,
        },
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 font-display" id="analytics">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Platform Analytics</span>
                    </div>
                    <h2 className="text-display-md md:text-display-lg mb-6">
                        Our <span className="gradient-text">Impact by Numbers</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real-time metrics showcasing our growth, user engagement, and the lives we've protected
                        since inception.
                    </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {keyMetrics.map((metric, index) => {
                        const Icon = metric.icon;
                        const colorClasses = {
                            primary: 'bg-primary/10 text-primary',
                            secondary: 'bg-secondary/10 text-secondary',
                            tertiary: 'bg-tertiary/10 text-tertiary',
                            success: 'bg-success/10 text-success',
                        };

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-medium hover:shadow-strong transition-shadow"
                            >
                                <div className={`w-12 h-12 rounded-lg ${colorClasses[metric.color]} flex items-center justify-center mb-4`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                                <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                                <div className="flex items-center gap-1 text-success text-sm font-semibold">
                                    <TrendingUp className="w-4 h-4" />
                                    {metric.trend}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Growth Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <LineChart
                        data={userGrowthData}
                        title="User Growth Trajectory"
                        color="primary"
                    />
                    <LineChart
                        data={contentBlockedData}
                        title="Content Blocked Over Time"
                        color="secondary"
                    />
                </div>

                {/* Platform & Content Distribution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <DonutChart
                        data={platformData}
                        title="Platform Distribution"
                    />
                    <BarChart
                        data={contentTypeData}
                        title="Content Type Blocked"
                        color="tertiary"
                    />
                </div>

                {/* Geographic & Engagement */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <BarChart
                        data={geographicData}
                        title="Top 5 Countries by Users"
                        color="success"
                    />

                    {/* Engagement Metrics */}
                    <div className="bg-white rounded-xl p-6 shadow-medium">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Engagement Metrics</h3>
                        <div className="space-y-6">
                            {engagementMetrics.map((metric, index) => {
                                const Icon = metric.icon;
                                return (
                                    <div key={index} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Icon className="w-5 h-5 text-primary" />
                                                <span className="text-sm font-medium text-gray-700">
                                                    {metric.label}
                                                </span>
                                            </div>
                                            <span className="text-lg font-bold text-gray-900">{metric.value}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-1000"
                                                style={{ width: `${metric.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Key Insights */}
                <div className="bg-white rounded-xl p-8 shadow-medium">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Insights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-semibold">Growth Rate</span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Achieved 150% user growth in 11 months, demonstrating strong product-market fit
                                and organic adoption across Africa.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-secondary mb-2">
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-semibold">Protection Scale</span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Blocking 45,000+ pieces of harmful content monthly, preventing digital violence
                                before it reaches our users.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-tertiary mb-2">
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-semibold">User Satisfaction</span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Maintaining a 4.6/5 rating with 82.5% daily active users, showing high engagement
                                and user trust.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Summary */}
                <div className="mt-12 text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Building a Safer Internet, One User at a Time
                    </h3>
                    <p className="text-xl mb-8 opacity-90">
                        Join 2,000+ women and girls already protected from online violence
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div>
                            <div className="text-4xl font-bold mb-2">2K+</div>
                            <div className="text-sm opacity-90">Protected Users</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">45K+</div>
                            <div className="text-sm opacity-90">Content Blocked</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">1</div>
                            <div className="text-sm opacity-90">Country</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">97.8%</div>
                            <div className="text-sm opacity-90">Detection Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Analytics;

