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
        <p>Anxiety can feel like a constant, underlying alarm bell you can't turn off. Stress, especially from work or family pressures, can leave you feeling perpetually reactive, overwhelmed, and unable to switch off. Whether you're a professional juggling deadlines or navigating complex cultural or family expectations, this constant state of high alert is exhausting.</p>
        <p>It can feel like you're just surviving, not thriving. My goal is to help you move beyond this, to understand these feelings and build practical, lasting skills to regain a sense of calm and control.</p>
        
        <h3>Our Approach to Anxiety & Stress</h3>
        <p>My approach is not one-size-fits-all. First, we'll explore <strong>your</strong> specific experience. We will work together to identify the root causes of your stress and the triggers for your anxiety, always within your unique personal and, if relevant, cultural context.</p>
        <p>I draw from evidence-based techniques, particularly <strong>Cognitive Behavioural Therapy (CBT)</strong>, which is highly effective for anxiety and stress. We'll work on practical, in-the-moment tools you can use right away, including:</p>
        <ul>
          <li>Learning to identify and gently challenge the negative thought patterns and "what-if" cycles that fuel anxiety.</li>
          <li>Developing grounding techniques to manage panic or overwhelming feelings as they happen, bringing you back to the present moment.</li>
          <li>Building effective boundary-setting skills—a crucial tool for overwhelmed professionals and those with demanding family expectations.</li>
          <li>Exploring relaxation and mindfulness practices designed to calm your nervous system and reduce the baseline level of stress.</li>
        </ul>
        
        <h3>Sessions & Duration</h3>
        <p>Therapy is a personal journey, so the duration varies for everyone. Here’s what you can typically expect:</p>
        <ul>
          <li><strong>Weekly Sessions:</strong> We will usually meet for 50 minutes once a week. This consistency is key to building momentum and making real progress, especially at the beginning.</li>
          <li><strong>Duration:</strong> Some clients find they have a new, effective toolkit and feel significant relief within <strong>8-12 sessions</strong>. For others, particularly those working through deeper-rooted patterns or related generational trauma, our work may be longer-term.</li>
        </ul>
        <p>We will regularly review our progress together to ensure our sessions remain focused, effective, and are always moving you toward your goals.</p>

        <h3>Your Path to a Calmer Mind</h3>
        <p>You don't have to be in a constant state of high alert. Imagine feeling in control, making decisions with clarity, and having the mental space to actually enjoy your life. That is what we'll work towards together. You can find <strong>your</strong> Rida—your sense of peace and contentment.</p>
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
