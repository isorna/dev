# Fetch

## CORS en local

Para poder evitar errores de CORS en local es necesario saltarse las medidas de seguridad de Chrome de alguna manera, la más fácil es crear una redirección local en el archivo **/private/etc/hosts**:

```bash
cd /private/etc
code hosts
````

```yaml
vue.local localhost:5173
```

Luego tendrás que refrescar la cache local de hosts para que reconozca el cambio.

```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```
