# 퍼포먼스 최적화

1. 로딩 성능 최적화
2. 렌더링 최적화

## webpack-bundle-analyzer

웹팩 번들 파일의 구조를 분석한다.

```planetext
npx cra-bundle-analyzer
```

## 이미지

너비에 두배 정도되는 이미지를 사용하는게 좋다.
120x 120에서는 240x240의 이미지를사용하는게 좋다.  
외부에서 이미지를 받아오는 경우에는 어떻게 이미지 최적화를 할 수 있나?  
CDN(contents Delivery network)을 사용한다.  
Image CDN(image processing CDN)

`http://cdn.image.com?src=[img src]&width=200&height=100`

a_kw=imgix&hsa_cam=9210499657&gclid=Cj0KCQiAvP6ABhCjARIsAH37rbTScnL4y1YSBZ2aBPICgve_0zcQbG9mk-d6YYY3nOUtX80zqbhpKYoaAjl8EALw_wcB)

## 텍스트 압축

2kb이상이면 인코딩을 하는게 낫다.  
그 이하는 압축을 하지 않는 것이 낫다.

### 1. Gzip

### 2. Deflate

## ref

- [repository](https://github.com/performance-lecture/lecture-1)
- [imgix](https://www.imgix.com/?utm_term=imgix&utm_campaign=adwords-branded&utm_source=adwords&utm_medium=ppc&hsa_tgt=kwd-347244981599&hsa_grp=98890898611&hsa_src=g&hsa_net=adwords&hsa_mt=p&hsa_ver=3&hsa_ad=456649958299&hsa_acc=8534109361&hs
