<?php
namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use GuzzleHttp\Client;

class CurrencyController extends AbstractController
{
    private $apiKey = 'bb48f367bd-023a1538ac-svhah4';

    /**
     * @Route("/admin/currency-list", name="admin_currency_list", methods={"GET"})
     */
    public function currencyList(): JsonResponse
    {
        $client = new Client();
        $response = $client->request('GET', 'https://api.fastforex.io/fetch-all', [
            'query' => ['api_key' => $this->apiKey, 'from' => 'USD'],
            'headers' => ['accept' => 'application/json'],
        ]);
        $data = json_decode($response->getBody(), true);
        $currencies = isset($data['results']) ? array_keys($data['results']) : [];
        return $this->json(['currencies' => $currencies]);
    }

    /**
     * @Route("/admin/currency-convert", name="admin_currency_convert", methods={"POST"})
     */
    public function currencyConvert(Request $request): JsonResponse
    {
        $payload = json_decode($request->getContent(), true);
        $amount = floatval($payload['amount'] ?? 0);
        $from = $payload['from'] ?? '';
        $to = $payload['to'] ?? [];

        // Fetch rates
        $client = new Client();
        $response = $client->request('GET', 'https://api.fastforex.io/fetch-all', [
            'query' => ['api_key' => $this->apiKey, 'from' => $from],
            'headers' => ['accept' => 'application/json'],
        ]);
        $data = json_decode($response->getBody(), true);

        $results = [];
        foreach ($to as $cur) {
            if (isset($data['results'][$cur])) {
                $results[$cur] = round($amount * $data['results'][$cur], 4);
            }
        }
        return $this->json(['results' => $results]);
    }
}