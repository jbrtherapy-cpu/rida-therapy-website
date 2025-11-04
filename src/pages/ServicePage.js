import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { serviceData } from '../serviceData'; // Import from your new service file
import '../ServicePage.css'; // We will create this new CSS file

function ServicePage() {
  // Get the 'slug' from the URL (e.g., "anxiety-stress")
  const { slug } = useParams();
  
  // Find the correct service from our data file
  const service = serviceData.find((service) => service.slug === slug);

  // If no service is found, show a message
  if (!service) {
    return (
      <div className="service-page-container">
        <h1>Service Not Found</h1>
        <p>Sorry, we couldn't find the service you were looking for.</p>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    );
  }

  // If the service is found, display it
  return (
    <div className="service-page">
      <div className="container">
        <div className="service-content">
          <h1>{service.title}</h1>
          {service.content}
        </div>
        <div className="back-link-container">
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;