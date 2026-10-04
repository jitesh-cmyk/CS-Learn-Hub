window.subjectCourse = {
  subject: "Artificial Intelligence",
  modules: [
    ["Introduction to Artificial Intelligence", "What is Artificial Intelligence?|Definition of AI|History of AI|Evolution of AI|Goals of AI|Importance of AI|Characteristics of AI|Applications of AI|Advantages of AI|Limitations of AI|AI in Daily Life"],
    ["Intelligent Systems", "What is an Intelligent System?|Characteristics of Intelligent Systems|Components of Intelligent Systems|Intelligent Agent|Environment|Sensors|Actuators|Agent Interaction|Examples of Intelligent Systems"],
    ["Intelligent Agents", "What is an Agent?|Agent and Environment|Rational Agent|Rationality|Agent Function|Agent Program|Types of Agents|Simple Reflex Agent|Model-Based Agent|Goal-Based Agent|Utility-Based Agent|Learning Agent"],
    ["AI Environment", "What is an Environment?|Fully Observable vs Partially Observable|Deterministic vs Stochastic|Episodic vs Sequential|Static vs Dynamic|Discrete vs Continuous|Single-Agent vs Multi-Agent|Known vs Unknown Environment"],
    ["Problem Solving in AI", "Problem Definition|Initial State|Goal State|State Space|Operators|Path|Solution|Problem Formulation|State Space Representation"],
    ["Search Techniques", "What is Search?|Search Space|Search Tree|Uninformed Search|Breadth First Search (BFS)|Depth First Search (DFS)|Depth Limited Search|Iterative Deepening Search|Uniform Cost Search"],
    ["Informed Search", "Heuristic Search|Heuristic Function|Best First Search|Greedy Best First Search|A* Search|Evaluation Function|Heuristic vs Uninformed Search"],
    ["Optimization & Local Search", "Local Search|Hill Climbing|Simple Hill Climbing|Steepest-Ascent Hill Climbing|Simulated Annealing|Genetic Algorithm Basics|Optimization Problems"],
    ["Knowledge Representation", "What is Knowledge Representation?|Need for Knowledge Representation|Knowledge Base|Facts|Rules|Objects|Relations|Knowledge Representation Techniques"],
    ["Logic in AI", "Introduction to Logic|Propositional Logic|Propositions|Logical Operators|Truth Tables|Predicate Logic|First-Order Logic|Predicates|Quantifiers|Inference"],
    ["Reasoning in AI", "What is Reasoning?|Deductive Reasoning|Inductive Reasoning|Abductive Reasoning|Forward Chaining|Backward Chaining|Inference Rules|Automated Reasoning"],
    ["Expert Systems", "What is an Expert System?|Components of Expert System|Knowledge Base|Inference Engine|User Interface|Explanation Facility|Knowledge Acquisition|Expert System Development|Applications|Advantages & Limitations"],
    ["Machine Learning Introduction", "What is Machine Learning?|AI vs ML|Types of Machine Learning|Supervised Learning|Unsupervised Learning|Reinforcement Learning|Training Data|Testing Data|Features|Labels|Model"],
    ["Supervised Learning", "What is Supervised Learning?|Classification|Regression|Linear Regression|Logistic Regression|Decision Tree|K-Nearest Neighbors|Naive Bayes|Support Vector Machine|Model Evaluation Basics"],
    ["Unsupervised Learning", "What is Unsupervised Learning?|Clustering|K-Means Clustering|Hierarchical Clustering|Association Rules|Dimensionality Reduction|PCA Basics"],
    ["Reinforcement Learning", "What is Reinforcement Learning?|Agent|Environment|State|Action|Reward|Policy|Value|Q-Learning Basics|Applications of Reinforcement Learning"],
    ["Neural Networks", "What is Neural Network?|Biological Neuron|Artificial Neuron|Perceptron|Input Layer|Hidden Layer|Output Layer|Weights|Bias|Activation Function|Feedforward Neural Network|Backpropagation Basics"],
    ["Deep Learning", "What is Deep Learning?|AI vs ML vs Deep Learning|Deep Neural Networks|CNN|RNN|LSTM Basics|Applications of Deep Learning|Advantages & Limitations"],
    ["Natural Language Processing", "What is NLP?|Human Language and Computers|Text Processing|Tokenization|Stop Words|Stemming|Lemmatization|Sentiment Analysis|Text Classification|Chatbots|Machine Translation|Speech Recognition"],
    ["Computer Vision", "What is Computer Vision?|Image Processing Basics|Image Classification|Object Detection|Image Recognition|Face Recognition|OCR|Applications of Computer Vision"],
    ["Robotics & AI", "What is Robotics?|AI in Robotics|Robot Components|Sensors|Actuators|Robot Perception|Robot Planning|Autonomous Robots|Applications of AI in Robotics"],
    ["Generative AI", "What is Generative AI?|Generative Models|Text Generation|Image Generation|Audio Generation|Video Generation|Large Language Models (LLMs)|AI Chatbots|Prompt Basics|Generative AI Applications"],
    ["AI Planning", "What is Planning?|Planning Problems|Initial State|Goal State|Actions|State Space Planning|Forward Planning|Backward Planning|Automated Planning"],
    ["Fuzzy Logic", "What is Fuzzy Logic?|Crisp Logic vs Fuzzy Logic|Fuzzy Sets|Membership Function|Linguistic Variables|Fuzzy Rules|Fuzzy Inference|Applications of Fuzzy Logic"],
    ["Evolutionary Computing", "What is Evolutionary Computing?|Genetic Algorithms|Population|Chromosome|Fitness Function|Selection|Crossover|Mutation|Genetic Algorithm Steps|Applications"],
    ["AI Applications", "AI in Healthcare|AI in Education|AI in Banking|AI in Agriculture|AI in Transportation|AI in Cyber Security|AI in E-commerce|AI in Entertainment|AI in Smart Homes|AI in Business"],
    ["AI Ethics & Challenges", "AI Ethics|Bias in AI|Fairness|Privacy|Data Security|Transparency|Explainable AI|AI Safety|Job Displacement|Responsible AI|Human vs AI"],
    ["Future of AI", "Future of Artificial Intelligence|Autonomous Systems|AI Assistants|AI in Robotics|AI and Automation|Human-AI Collaboration|Opportunities|Challenges"]
  ].map(([title, topics]) => ({
    title,
    topics: topics.split("|").map((topic) => topic.trim())
  }))
};
