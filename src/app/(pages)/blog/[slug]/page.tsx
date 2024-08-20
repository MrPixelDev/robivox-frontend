import { PodcastVoiceoverPage } from '@/app/(pages)/blog/PodcastVoiceover';

type Params = {
    params: {
        slug: string;
    };
};

function Blog({ params }: Params) {
    const slug = params.slug;

    if (slug === 'podcast-voiceover' || true) {
        return <PodcastVoiceoverPage />;
    }
}

export default Blog;
