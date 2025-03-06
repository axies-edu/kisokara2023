export interface Data {
  id: number;
  title: string;
  description: string;
  keywordIds?: number[];
  storyLabel?: string;
  videos: Video[];
  documents: Document[];
  hasEnThumbnail?: boolean;
}

export interface Video {
  id: string;
  filename: string;
  buttonLabel?: string;
}

export interface Keyword {
  id: number;
  value: string;
  label: string;
}

interface Document {
  label?: string;
  filename: string;
}

export const allData: Data[] = [
  {
    id: 1,
    title: 'What is Copyright?',
    description:
      'The three go to the professor to learn the difference between illegal downloads, such as movies, which are forbidden, and open source, which anyone can download.',
    keywordIds: [0, 1, 2, 3],
    videos: [
      {
        id: '01a',
        filename: '2022_01a_somosomo',
      },
      {
        id: '01b',
        filename: '2022_01b_somosomo',
      },
    ],
    documents: [{ filename: '01.pdf' }],
  },
  {
    id: 2,
    title: 'The Right to Transmit Copyrighted Works to the Public',
    description:
      'Naoya tries to post a video created by Kasumi on social media but is surprised when he hears that it violates the copyright. What rights does copyright include?',
    keywordIds: [4, 5, 6],
    videos: [
      {
        id: '02a',
        filename: '2022_02a_koushu',
      },
      {
        id: '02b',
        filename: '2022_02b_koushu',
      },
    ],
    documents: [{ filename: '02.pdf' }],
  },
  {
    id: 3,
    title: 'Moral Rights Held by the Author',
    description:
      'Aoi altered a video created by Kasumi without permission. Kasumi was not offended, but she was bothered by it. This may be because she felt the alternation denied her passion for the video.',
    keywordIds: [7, 8, 9, 10, 11],
    videos: [
      {
        id: '03a',
        filename: '2022_03a_jinkaku',
      },
      {
        id: '03b',
        filename: '2022_03b_jinkaku',
      },
    ],
    documents: [{ filename: '03.pdf' }],
    hasEnThumbnail: true,
  },
  {
    id: 4,
    title: 'The Copyright Protection Term and How to Use Copyrighted Works',
    description:
      'Ryota was assigned to produce a video introducing the department on the open campus. While trying to understand the special treatment of copyright in the class, he organizes the rights of the materials given to him by Professor Uchida.',
    keywordIds: [12, 13, 14],
    videos: [
      {
        id: '04a',
        filename: '2022_04a_hogokikan',
      },
      {
        id: '04b',
        filename: '2022_04b_hogokikan',
      },
    ],
    documents: [{ filename: '04.pdf' }],
  },
  {
    id: 5,
    title: 'Special Rules Closely Related to School Education',
    description:
      "Professors use or distribute materials in class or that students hand out during seminars, including copyrighted works created by others. We will consider how to use other people's works in educational situations and the rules.",
    keywordIds: [15, 13, 16],
    videos: [
      {
        id: '05a',
        filename: '2022_05a_gakkou',
      },
      {
        id: '05b',
        filename: '2022_05b_gakkou',
      },
    ],
    documents: [{ filename: '05.pdf' }],
  },
  {
    id: 6,
    title: 'Copyright Infringement on Social Media?',
    description:
      "Aoi tries to upload Kasumi's character lunch box on social media. She learns that copyright is also involved in character lunch boxes.",
    keywordIds: [17, 5, 18, 19, 20],
    videos: [
      {
        id: '06a',
        filename: '2022_06a_sns',
      },
      {
        id: '06b',
        filename: '2022_06b_sns',
      },
    ],
    documents: [{ filename: '06.pdf' }],
  },
  {
    id: 7,
    title: "Let's Read the Terms of Use",
    description:
      'Aoi made a poster for the band club by using free materials. Kasumi is wondering if she can use the free materials freely....',
    keywordIds: [21, 22, 23],
    videos: [
      {
        id: '07a',
        filename: '2022_07a_riyoukiyaku',
      },
      {
        id: '07b',
        filename: '2022_07b_riyoukiyaku',
      },
    ],
    documents: [{ filename: '07.pdf' }],
  },
  {
    id: 8,
    title: 'Learning about Citations',
    description:
      'The three are working on a report. A senior who has seen the report is concerned about the "citation" method. What kind of problem is the citation?',
    keywordIds: [24, 25, 26],
    videos: [
      {
        id: '08a',
        filename: '2022_08a_innyou',
      },
      {
        id: '08b',
        filename: '2022_08b_innyou',
      },
    ],
    documents: [{ filename: '08.pdf' }],
  },
  {
    id: 9,
    title: 'Is It Plagiarism?',
    description:
      'Aoi and Naoya find a post on social media that says the illustration on a city poster is plagiarism, but Kasumi is wondering.',
    keywordIds: [27, 28, 29, 30],
    videos: [
      {
        id: '09a',
        filename: '2023_09a_pakuri',
      },
      {
        id: '09b',
        filename: '2023_09b_pakuri',
      },
    ],
    documents: [{ filename: '09.pdf' }],
  },
  {
    id: 10,
    title: 'Guilty? Compensation for Damages? When Copyright is Infringed',
    description:
      'Aoi and Kasumi asked Prof. Uchida how to respond to infringements, such as copyright infringement warnings and articles about damages at movie theaters.',
    keywordIds: [31, 32, 20, 33, 34, 35, 7, 36],
    videos: [
      {
        id: '10a',
        filename: '2023_10a_shingai',
      },
      {
        id: '10b',
        filename: '2023_10b_shingai',
      },
    ],
    documents: [{ filename: '10.pdf' }],
    hasEnThumbnail: true,
  },
  {
    id: 11,
    title: 'Stage Events and Copyright',
    description:
      'At a meeting of the school festival committee, a senior asked the three about copyright treatment for stage events. Is copyright clearance necessary even for an event at an educational institution with free admission?',
    keywordIds: [37, 38, 7, 39],
    videos: [
      {
        id: '11a',
        filename: '2023_11a_stageevent',
      },
      {
        id: '11b',
        filename: '2023_11b_stageevent',
      },
    ],
    documents: [{ filename: '11.pdf' }],
  },
  {
    id: 12,
    title: 'How Much Similarity is Safe? School Festival Posters',
    description:
      'The three are working on a poster for the school festival. Even if they cannot use the characters from the manga, can they make props and costumes?',
    keywordIds: [14, 40, 41],
    videos: [
      {
        id: '12a',
        filename: '2023_12a_poster',
      },
      {
        id: '12b',
        filename: '2023_12b_poster',
      },
    ],
    documents: [{ filename: '12.pdf' }],
  },
  {
    id: 13,
    title:
      'Be Careful of Neighboring Rights!\nUploading Videos of Music Events',
    description:
      'Kasumi and Aoi are trying to upload a video of the school festival to a video-sharing website. Is there any difference even though they use the same music in the band and dance clubs?',
    keywordIds: [42, 37, 43],
    videos: [
      {
        id: '13a',
        filename: '2023_13a_musicevent',
      },
      {
        id: '13b',
        filename: '2023_13b_musicevent',
      },
    ],
    documents: [{ filename: '13.pdf' }],
  },
  {
    id: 14,
    title: 'Is It Okay to Assign the Rights?',
    description:
      'Naoya tries to enter a competition with his favorite kitten video. He seems to be dazzled by the prize money, but he has not checked the copyright of the selected video.',
    keywordIds: [44, 4],
    videos: [
      {
        id: '14a',
        filename: '2023_14a_kenrijouto',
      },
      {
        id: '14b',
        filename: '2023_14b_kenrijouto',
      },
    ],
    documents: [{ filename: '14.pdf' }],
  },
  {
    id: 15,
    title: 'You Can Use My Work with These Conditions!\nGranting Licenses',
    description:
      'Aoi is trying to make her original illustrations available to the public. She learns about Creative Commons licenses and the benefits of terms of use for illustrations to be used as intended.',
    keywordIds: [14, 45],
    videos: [
      {
        id: '15a',
        filename: '2023_15a_kyodaku',
      },
      {
        id: '15b',
        filename: '2023_15b_kyodaku',
      },
    ],
    documents: [{ filename: '15.pdf' }],
  },
  {
    id: 16,
    title: 'The Difficulty of Similarity',
    description:
      'Naoya finds a work similar to that Kasumi has posted on a novel submission site, but Kasumi is puzzled and confused.',
    keywordIds: [27, 46, 47, 48],
    videos: [
      {
        id: '16a',
        filename: '2023_16a_ruijisei',
      },
      {
        id: '16b',
        filename: '2023_16b_ruijisei',
      },
    ],
    documents: [{ filename: '16.pdf' }],
  },
  {
    id: 17,
    title:
      'Similar Rights to Copyright and But Different Rights: Intellectual Property Rights',
    description:
      'In addition to copyrights, there are other systems to protect what people have come up with. The topic of car design is an opportunity to learn about them.',
    keywordIds: [49, 50, 51, 52, 53, 54, 55],
    videos: [
      {
        id: '17a',
        filename: '2023_17a_chitekizaisanken',
      },
      {
        id: '17b',
        filename: '2023_17b_chitekizaisanken',
      },
    ],
    documents: [{ filename: '17.pdf' }],
    hasEnThumbnail: true,
  },
  {
    id: 18,
    title: 'Using Foreign Works',
    description:
      'Naoya and Kasumi want to use foreign lyrics on the website. They learn about the Berne Convention and wartime extentions from Prof. Uchida.',
    keywordIds: [56, 57, 58],
    videos: [
      {
        id: '18a',
        filename: '2023_18a_kaigai',
      },
      {
        id: '18b',
        filename: '2023_18b_kaigai',
      },
    ],
    documents: [
      { filename: '18.pdf' },
      { label: 'Related Documents', filename: '18_01_material.pdf' },
    ],
  },
  {
    id: 19,
    title: 'What are Derivative Works?',
    description:
      "Aoi's friend wants to make a novel from a manga that Aoi drew, and Aoi consults with Kasumi and Naoya. She thinks it's okay to use the manga, but she also wonders how the friend will use the novel and how it will be published.",
    keywordIds: [59, 60, 41],
    videos: [
      {
        id: '19a',
        filename: '2023_19a_nijiteki',
      },
      {
        id: '19b',
        filename: '2023_19b_nijiteki',
      },
    ],
    documents: [{ filename: '19.pdf' }],
  },
  {
    id: 20,
    title: 'What Should I Do If Copyrighted Work Appears in My Work?',
    description:
      'Ryota filmed the working scene in the lab to make a video introducing the lab. While editing the video, he noticed that a poster in the lab was in the video. Is there any problem with posting the video as it is?',
    keywordIds: [61, 62],
    videos: [
      {
        id: '20a',
        filename: '2023_20a_utsurikomi',
      },
      {
        id: '20b',
        filename: '2023_20b_utsurikomi',
      },
    ],
    documents: [{ filename: '20.pdf' }],
  },
  {
    id: 21,
    title: 'What Does "Reproduction for Private Use" Mean?',
    description:
      'The regular exams were coming up, so they decided to study together. Aoi said there was a part of a specialized subject she did not understand, so Naoya copied a part of a book from his home and gave it to her. Kasumi pointed out that it might be a copyright infringement.',
    keywordIds: [63, 64],
    videos: [
      {
        id: '21a',
        filename: '2023_21a_shitekisiyou',
      },
      {
        id: '21b',
        filename: '2023_21b_shitekisiyou',
      },
    ],
    documents: [{ filename: '21.pdf' }],
  },
  {
    id: 22,
    title: 'AI Learns and AI Creates? Generative AI and Copyright',
    description:
      'The illustration Naoya created for the event using generative AI resembled an old CD cover. What should we do in such a case? How should we think about the relationship between the system by which the AI learns from existing images to create pictures and copyrights?',
    keywordIds: [65, 66, 27, 46],
    videos: [
      {
        id: '22a',
        filename: '2023_22ab_ai',
        buttonLabel: 'Story & Commentary',
      },
    ],
    documents: [{ filename: '22.pdf' }],
  },
  {
    id: 23,
    title: 'Copyright from the Perspective of Actors (Interviews)',
    description:
      'We interviewed the five lead actors about their experiences in performing in this video. We ask them about their knowledge of copyright that may be useful in the future, the publication of this material under a Creative Commons license, and various other thoughts related to copyright.',
    keywordIds: [67, 45],
    videos: [
      {
        id: '23a',
        filename: '2023_23a_interview',
        buttonLabel: 'Interview',
      },
    ],
    documents: [],
  },
  {
    id: 24,
    title: 'Recommendations and Messages from Actors',
    description:
      'We asked the five lead actors for their recommendations and messages on the videos.',
    keywordIds: [67, 68, 69],
    storyLabel: 'INTERVIEW',
    videos: [
      {
        id: '24a',
        filename: '2023_interview1',
        buttonLabel: 'Recommend',
      },
      {
        id: '24b',
        filename: '2023_interview2',
        buttonLabel: 'Message',
      },
    ],
    documents: [],
    hasEnThumbnail: true,
  },
];

export const allKeywords: Keyword[] = [
  {
    id: 0,
    value: 'Copyrighted Works',
    label: 'Copyrighted Works',
  },
  {
    id: 1,
    value: 'Authors',
    label: 'Authors',
  },
  {
    id: 2,
    value: 'Fair Exploitation',
    label: 'Fair Exploitation',
  },
  {
    id: 3,
    value: "Protection of Authors' Rights",
    label: "Protection of Authors' Rights",
  },
  {
    id: 4,
    value: 'Economic Rights',
    label: 'Economic Rights',
  },
  {
    id: 5,
    value: 'Public Transmission Right',
    label: 'Public Transmission Right',
  },
  {
    id: 6,
    value: 'Right of Making Transmittable',
    label: 'Right of Making Transmittable',
  },
  {
    id: 7,
    value: 'Moral Rights',
    label: 'Moral Rights',
  },
  {
    id: 8,
    value: 'Publication Right',
    label: 'Publication Right',
  },
  {
    id: 9,
    value: 'Attribution Right',
    label: 'Attribution Right',
  },
  {
    id: 10,
    value: 'Integrity Right',
    label: 'Integrity Right',
  },
  {
    id: 11,
    value: 'Acts Deemed to Constitute Infringement of Moral Rights',
    label: 'Acts Deemed to Constitute Infringement of Moral Rights',
  },
  {
    id: 12,
    value: 'Protection Term',
    label: 'Protection Term',
  },
  {
    id: 13,
    value: 'Limitations of Rights',
    label: 'Limitations of Rights',
  },
  {
    id: 14,
    value: 'Permission to Use',
    label: 'Permission to Use',
  },
  {
    id: 15,
    value: 'Article 35 of the Copyright Act',
    label: 'Article 35 of the Copyright Act',
  },
  {
    id: 16,
    value: 'Compensation for Public Transmission for Educational Purposes',
    label: 'Compensation for Public Transmission for Educational Purposes',
  },
  {
    id: 17,
    value: 'Reproduction Right',
    label: 'Reproduction Right',
  },
  {
    id: 18,
    value: 'Social Media',
    label: 'Social Media',
  },
  {
    id: 19,
    value: 'Penalty',
    label: 'Penalty',
  },
  {
    id: 20,
    value: 'Offence Subject to Complaint',
    label: 'Offence Subject to Complaint',
  },
  {
    id: 21,
    value: 'Free Materials',
    label: 'Free Materials',
  },
  {
    id: 22,
    value: 'License',
    label: 'License',
  },
  {
    id: 23,
    value: 'Commercial Use',
    label: 'Commercial Use',
  },
  {
    id: 24,
    value: 'Published Work',
    label: 'Published Work',
  },
  {
    id: 25,
    value: 'Master-Subject Relationship',
    label: 'Master-Subject Relationship',
  },
  {
    id: 26,
    value: 'Indication of Sources',
    label: 'Indication of Sources',
  },
  {
    id: 27,
    value: 'Similarity',
    label: 'Similarity',
  },
  {
    id: 28,
    value: 'Copyrightability',
    label: 'Copyrightability',
  },
  {
    id: 29,
    value: 'Artistic Style',
    label: 'Artistic Style',
  },
  {
    id: 30,
    value: 'Copyright Infringement',
    label: 'Copyright Infringement',
  },
  {
    id: 31,
    value: 'Criminal Trial',
    label: 'Criminal Trial',
  },
  {
    id: 32,
    value: 'Criminal Penalty',
    label: 'Criminal Penalty',
  },
  {
    id: 33,
    value: 'Civil Trial',
    label: 'Civil Trial',
  },
  {
    id: 34,
    value: 'Injunction',
    label: 'Injunction',
  },
  {
    id: 35,
    value: 'Damages',
    label: 'Damages',
  },
  {
    id: 36,
    value: 'Restoration of Honor',
    label: 'Restoration of Honor',
  },
  {
    id: 37,
    value: 'JASRAC',
    label: 'JASRAC',
  },
  {
    id: 38,
    value: 'Non-Commercial',
    label: 'Non-Commercial',
  },
  {
    id: 39,
    value: 'E-sports',
    label: 'E-sports',
  },
  {
    id: 40,
    value: 'Direct Perception of Essential Characteristics',
    label: 'Direct Perception of Essential Characteristics',
  },
  {
    id: 41,
    value: 'Adaptation',
    label: 'Adaptation',
  },
  {
    id: 42,
    value: 'Neighboring Rights',
    label: 'Neighboring Rights',
  },
  {
    id: 43,
    value: 'YouTube',
    label: 'YouTube',
  },
  {
    id: 44,
    value: 'Assignment of Rights',
    label: 'Assignment of Rights',
  },
  {
    id: 45,
    value: 'Creative Commons License',
    label: 'Creative Commons License',
  },
  {
    id: 46,
    value: 'Access',
    label: 'Access',
  },
  {
    id: 47,
    value: 'Setting',
    label: 'Setting',
  },
  {
    id: 48,
    value: 'Idea',
    label: 'Idea',
  },
  {
    id: 49,
    value: 'Intellectual Property Rights',
    label: 'Intellectual Property Rights',
  },
  {
    id: 50,
    value: 'Automatic Protection System',
    label: 'Automatic Protection System',
  },
  {
    id: 51,
    value: 'Patent Right',
    label: 'Patent Right',
  },
  {
    id: 52,
    value: 'Utility Model Right',
    label: 'Utility Model Right',
  },
  {
    id: 53,
    value: "Breeder's Right",
    label: "Breeder's Right",
  },
  {
    id: 54,
    value: 'Design Right',
    label: 'Design Right',
  },
  {
    id: 55,
    value: 'Trademark Right',
    label: 'Trademark Right',
  },
  {
    id: 56,
    value: 'Berne Convention',
    label: 'Berne Convention',
  },
  {
    id: 57,
    value: 'Copyright Protection Term',
    label: 'Copyright Protection Term',
  },
  {
    id: 58,
    value: 'Wartime Extensions',
    label: 'Wartime Extensions',
  },
  {
    id: 59,
    value: 'Derivative Work',
    label: 'Derivative Work',
  },
  {
    id: 60,
    value: 'Original Work',
    label: 'Original Work',
  },
  {
    id: 61,
    value: 'Incidentally Captured Use',
    label: 'Incidentally Captured Use',
  },
  {
    id: 62,
    value: 'Incidentally Captured Works',
    label: 'Incidentally Captured Works',
  },
  {
    id: 63,
    value: 'Reproduction',
    label: 'Reproduction',
  },
  {
    id: 64,
    value: 'Reproduction for Private Use',
    label: 'Reproduction for Private Use',
  },
  {
    id: 65,
    value: 'Generative AI',
    label: 'Generative AI',
  },
  {
    id: 66,
    value: 'AI learning',
    label: 'AI learning',
  },
  {
    id: 67,
    value: 'Interview',
    label: 'Interview',
  },
  {
    id: 68,
    value: 'Recommendations',
    label: 'Recommendations',
  },
  {
    id: 69,
    value: 'Messages',
    label: 'Messages',
  },
];
