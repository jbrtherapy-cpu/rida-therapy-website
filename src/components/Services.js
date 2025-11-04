import React from 'react';
import { Link } from 'react-router-dom';
import { serviceData } from '../serviceData'; // 1. IMPORT YOUR NEW SERVICE DATA

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2>How I Can Help</h2>
        <div className="services-grid">
          
          {/* 2. MAP OVER THE DATA TO CREATE THE CARDS */}
          {serviceData.map((service) => (
            <Link to={`/services/${service.slug}`} key={service.slug} className="service-card-link">
              <div className="service-card">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span>Read More ▸</span> {/* 3. ADD A "READ MORE" PROMPT */}
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;