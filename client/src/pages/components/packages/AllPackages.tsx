import React, { useState, useEffect } from "react";
import HomePackages from "../home/HomePackages";

// AllPackages component displayed on packages page
const AllPackages: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'fixed' | 'flexible'>('fixed');
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    return (
        <section>
            <div className="all-packages">
                <div className="all-packages-container">
                    <div className="all-packages-main">
                        <div className="all-packages-type">
                            <div className="packages-header">
                                <h2>Packages</h2>
                            </div>
                            {/* <!-- Umrah and Hajj Selection --> */}
                            <div className="packages-filter-btn">
                                <div className="packages-umrah-hajj">
                                    <div>
                                        <input type="radio" id="umrah" name="umrahHajj" hidden />
                                        <label htmlFor="umrah" className="packages-umrah-hajj-btn">Umrah</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="hajj" name="umrahHajj" hidden />
                                        <label htmlFor="hajj" className="packages-umrah-hajj-btn">Hajj</label>
                                    </div>
                                </div>

                                {/* <!-- Package Type Selection --> */}
                                <div className="packages-type-buttons">
                                    <div>
                                        <input type="radio" id="fixed" name="packageType" hidden />
                                        <label htmlFor="fixed" className="package-type-btn">Fixed Packages</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="flexible" name="packageType" hidden />
                                        <label htmlFor="flexible" className="package-type-btn">Flexible Packages</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-packages-cards">
                    <HomePackages />
                    <HomePackages />
                </div>

            </div>
        </section>
    );
};

export default AllPackages;