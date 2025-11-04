// This file will hold all your service content.
// "slug" is the unique URL part (e.g., /services/anxiety-stress)
// "title" is for the card and the page heading
// "summary" is the short text for the card on the homepage
// "content" is the detailed information for the service's own page

export const serviceData = [
  // --- YOUR TWO NEW SERVICES ---
  {
    slug: 'counselling-psychotherapy',
    title: 'Counselling & Psychotherapy',
    summary: 'A generic overview of what I can offer for all people, providing a safe, non-judgmental space to explore your thoughts and feelings.',
    content: (
      <>
        <p>Counselling and psychotherapy offer a confidential and supportive space for you to talk about issues and concerns that you are facing in your life. As a BACP accredited therapist, I am here to listen without judgment and to help you find new ways to approach your challenges.</p>
        
        <h3>How It Works</h3>
        <p>Our sessions are a collaborative process. We'll work together to understand your unique situation. Whether you're feeling stuck, facing a difficult decision, or simply want to understand yourself better, therapy can provide the clarity you need.</p>
        
        <h3>Typical Sessions & Approach</h3>
        <p>A typical session lasts 50 minutes, usually on a weekly basis. The total number of sessions depends entirely on your needs and goals. My approach is integrative, meaning I draw from various therapeutic models to find what works best for you.</p>
      </>
    )
  },
  {
    slug: 'relationship-counselling',
    title: 'Relationship Counselling',
    summary: 'Specialist counselling for couples. We will use methods from leading experts like the Gottman Institute to improve communication and rebuild connection.',
    content: (
      <>
        <p>Relationships can be one of our greatest sources of joy, but also our greatest challenge. Whether you're a couple feeling stuck in a cycle of conflict, or you're struggling to communicate, there is a path forward.</p>
        
        <h3>My Approach: The Gottman Method & More</h3>
        <p>My work is heavily influenced by the world-renowned Gottman Institute, which uses decades of research to understand what makes relationships work. We'll focus on practical, evidence-based tools to:</p>
        <ul>
          <li>Disarm conflicting verbal communication</li>
          <li>Increase intimacy, respect, and affection</li>
          <li>Remove barriers that create a feeling of stagnancy</li>
          <li>Create a heightened sense of empathy and understanding</li>
        </ul>

        <h3>How It Works</h3>
        <p>We'll start by assessing your relationship's strengths and areas for improvement. From there, we'll build a tailored plan. This isn't about blaming, but about understanding patterns and building a stronger, more resilient partnership.</p>
      </>
    )
  },
  
  // --- YOUR THREE EXISTING SERVICES ---
  {
    slug: 'anxiety-stress',
    title: 'Anxiety & Stress Management',
    summary: 'For the individual feeling pulled in a million directions. Learn practical tools to navigate pressure with serenity and find a healthier work-life balance.',
    content: (
      <>
        <p>For the individual feeling pulled in a million directions. We'll work together to move you from being constantly reactive to feeling proactive and in control. Learn practical tools to navigate pressure with serenity and find a healthier work-life balance.</p>
        
        <h3>How It Works</h3>
        <p>(Add more detail here about how you specifically treat anxiety and stress...)</p>
      </>
    )
  },
  {
    slug: 'cultural-identity',
    title: 'Counselling for Cultural Identity',
    summary: 'For the individual navigating the delicate balance of two worlds, family expectations, and generational trauma. A safe space to find your own voice.',
    content: (
      <>
        <p>For the individual navigating the delicate balance of two worlds. If you're struggling with the weight of family expectations, feeling invalidated, or processing generational trauma, this is a safe space to find your own voice, build your self-worth, and set boundaries without guilt.</p>
        
        <h3>How It Works</h3>
        <p>(Add more detail here about your approach to these specific issues...)</p>
      </>
    )
  },
  {
    slug: 'relationship-family-conflict',
    title: 'Relationship & Family Counselling',
    summary: 'For couples and individuals facing cultural and family conflicts, such as over-involved in-laws and differing values. Learn to communicate and work as a team.',
    content: (
      <>
        <p>For the couple facing cultural and family conflicts. We can address the challenges of over-involved in-laws and differing cultural values. Learn to communicate better, support each other, and work as a team to build a relationship that honours both your partnership and your families.</p>
        
        <h3>How It Works</h3>
        <p>(Add more detail here... This can focus more on the family/cultural conflict aspect, while the other "Relationship Counselling" service is more for the couple's internal dynamic.)</p>
      </>
    )
  },
];

export default serviceData;
