<?php

namespace OCA\Cookbook\Service;

use OCA\Cookbook\Exception\HtmlParsingException;
use OCA\Cookbook\Helper\HTMLParser\AbstractHtmlParser;
use OCA\Cookbook\Helper\HTMLParser\HttpJsonLdParser;
use OCA\Cookbook\Helper\HTMLParser\HttpMicrodataParser;
use OCP\IL10N;

class RecipeExtractionService {
	/**
	 * @var array
	 */
	private $parsers;

	/**
	 * @var IL10N
	 */
	private $l;

	public function __construct(HttpJsonLdParser $jsonParser, HttpMicrodataParser $microdataParser,
		IL10N $l10n) {
		$this->parsers = [$jsonParser, $microdataParser];
		$this->l = $l10n;
	}

	/**
	 * Parse a DOM document using all registered parsers
	 *
	 * @param \DOMDocument $document The document to parse
	 * @param ?string $url The URL of the recipe to be parsed
	 * @throws HtmlParsingException If no parser was able to successfully parse the document
	 * @return array The data as returned from the parser
	 */
	public function parse(\DOMDocument $document, ?string $url): array {
		/** @var $parser AbstractHtmlParser */
		foreach ($this->parsers as $parser) {
			try {
				return $parser->parse($document, $url);
			} catch (HtmlParsingException $ex) {
				// Silently ignore failure as there might be other parsers better suited
			}
		}

		throw new HtmlParsingException($this->l->t('No parser found for the given import.'));
	}
}
