<script>
	import Icon from '@iconify/svelte';
	import Card from '../lib/components/card/card.svelte';
	import LinksHeadline from '../lib/components/links-headline.svelte';
	import PageWrapper from '../lib/components/page-wrapper.svelte';
	import Headline from '../lib/components/typography/headline.svelte';
	import Paragraph from '../lib/components/typography/paragraph.svelte';
	import LinkShorteningContainer from '../lib/components/link-shortening/link-shortening-container.svelte';
	import ButtonCyan from '../lib/components/button-cyan.svelte';
</script>

<section class="text-center lg:text-start flex flex-col mt-4 mb-32">
	<PageWrapper>
		<div class="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-8">
			<div>
				<img src="/illustration-working.svg" alt="" />
			</div>
			<div class="mt-4">
				<Headline lgTextSize="lg:text-6xl">More than just shorter links</Headline>
				<Paragraph>
					Build your brand's recognition and get detailed insights on how your links are performing.
				</Paragraph>
				<ButtonCyan classes="mt-4 px-4 py-2">Get Started</ButtonCyan>
			</div>
		</div>
	</PageWrapper>
</section>
<section class="bg-gray-200 text-center pb-16">
	<PageWrapper>
		<div class="mb-20 flex flex-col justify-center items-center">
			<LinkShorteningContainer />
			<div class="max-w-md">
				<Headline textSize="text-2xl">Advanced Statistics</Headline>
				<Paragraph>
					Track how your links are performing across the web and our advenced statistics dashboard
				</Paragraph>
			</div>
		</div>
		<div class="flex flex-col lg:flex-row gap-16">
			<Card headline="Brand Recognition" img="/icon-brand-recognition.svg"
				>Boost your brand recognition with each click. Generic links don't mean a thing. Branded
				links help instil confidence in your content.</Card
			>
			<Card headline="Detailed Records" img="/icon-detailed-records.svg">
				Gain insights into who is clicking your links. Knowing when and where people engage with
				your content helps inform better decisions.
			</Card>
			<Card headline="Fully Customizable" img="/icon-fully-customizable.svg">
				Improve brand awareness and content discoverability through customizable links,
				supercharging audience engagement.
			</Card>
		</div>
	</PageWrapper>
</section>
<section class="bg-DarkViolet px-4 py-20 text-center bg-boost-mobile lg:bg-boost-desktop bg-cover">
	<p class="text-2xl font-bold text-white">Boost your links today</p>
	<ButtonCyan classes="px-10 py-3 mt-4">Get Started</ButtonCyan>
</section>
<footer
	class="bg-VeryDarkViolet text-white text-center py-10 flex flex-col lg:flex-row lg:justify-between lg:px-24"
>
	<Headline textColor="text-white">Shortly</Headline>
	<div>
		<LinksHeadline>Features</LinksHeadline>
		<div class="flex flex-col gap-2">
			<a class="text-sm text-Gray" href="/">Link Shortening</a>
			<a class="text-sm text-Gray" href="/">Branded Links</a>
			<a class="text-sm text-Gray" href="/">Analytics</a>
		</div>
	</div>
	<div>
		<LinksHeadline>Resources</LinksHeadline>
		<div class="flex flex-col gap-2">
			<a class="text-sm text-Gray" href="/">Blog</a>
			<a class="text-sm text-Gray" href="/">Developes</a>
			<a class="text-sm text-Gray" href="/">Support</a>
		</div>
	</div>
	<div>
		<LinksHeadline>Company</LinksHeadline>
		<div class="flex flex-col gap-2">
			<a class="text-sm text-Gray" href="/">About</a>
			<a class="text-sm text-Gray" href="/">Our Team</a>
			<a class="text-sm text-Gray" href="/">Careers</a>
			<a class="text-sm text-Gray" href="/">Contact</a>
		</div>
	</div>
	<div class="flex justify-center text-2xl mt-10 lg:mt-0 gap-4">
		<a href="/"><Icon icon="ant-design:facebook-filled" /></a>
		<a href="/"><Icon icon="mdi:twitter" /></a>
		<a href="/"><Icon icon="mdi:pinterest" /></a>
		<a href="/"><Icon icon="mdi:instagram" /></a>
	</div>
</footer>
